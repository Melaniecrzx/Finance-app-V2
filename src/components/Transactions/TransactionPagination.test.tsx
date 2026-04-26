import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionPagination from "./TransactionPagination";

describe("TransactionPagination", () => {
  it("renders correct number of pages", () => {
    render(<TransactionPagination total={30} page={1} setPage={vi.fn()} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
  it("disables Prev button on first page", () => {
    render(<TransactionPagination total={30} page={1} setPage={vi.fn()} />);
    expect(screen.getByText("Prev").closest("button")).toBeDisabled();
  });
  it("disables Next button on last page", () => {
    render(<TransactionPagination total={30} page={3} setPage={vi.fn()} />);
    expect(screen.getByText("Next").closest("button")).toBeDisabled();
  });
  it("calls setPage with page - 1 when clicking Prev", async () => {
    const setPage = vi.fn();
    render(<TransactionPagination total={30} page={2} setPage={setPage} />);
    await userEvent.click(screen.getByText("Prev").closest("button")!);
    expect(setPage).toHaveBeenCalledWith(1);
  });
  it("calls setPage with page + 1 when clicking Next", async () => {
    const setPage = vi.fn();
    render(<TransactionPagination total={30} page={1} setPage={setPage} />);
    await userEvent.click(screen.getByText("Next").closest("button")!);
    expect(setPage).toHaveBeenCalledWith(2);
  });
  it("calls setPage with correct page when clicking a page number", async () => {
    const setPage = vi.fn();
    render(<TransactionPagination total={30} page={1} setPage={setPage} />);
    await userEvent.click(screen.getByText("2"));
    expect(setPage).toHaveBeenCalledWith(2);
  });
  it("applies active class to current page", () => {
    render(<TransactionPagination total={30} page={2} setPage={vi.fn()} />);
    expect(screen.getByText("2")).toHaveClass("bg-grey-900");
  });
});
