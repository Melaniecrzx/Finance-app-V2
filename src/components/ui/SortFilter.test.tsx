import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortFilter from "./SortFilter";

describe("SortFilter", () => {
  it("renders the selected option", () => {
    render(<SortFilter value="latest" onChange={vi.fn()} />);
    expect(screen.getByText("Latest")).toBeInTheDocument();
  });
  it("does not show options before clicking", () => {
    render(<SortFilter value="latest" onChange={vi.fn()} />);
    expect(screen.queryByText("Oldest")).not.toBeInTheDocument();
  });
  it("shows all options after clicking", async () => {
    render(<SortFilter value="latest" onChange={vi.fn()} />);
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Oldest")).toBeInTheDocument();
    expect(screen.getByText("A to Z")).toBeInTheDocument();
    expect(screen.getByText("Z to A")).toBeInTheDocument();
    expect(screen.getByText("Highest")).toBeInTheDocument();
    expect(screen.getByText("Lowest")).toBeInTheDocument();
  });
  it("calls on Change with correct value when option is clicked", async () => {
    const handleChange = vi.fn();
    render(<SortFilter value="latest" onChange={handleChange} />);
    await userEvent.click(screen.getAllByRole("button")[0]);
    await userEvent.click(screen.getByText("Oldest"));
    expect(handleChange).toHaveBeenCalledWith("oldest");
  });
  it("closes the options after selecting an option", async () => {
    render(<SortFilter value="latest" onChange={vi.fn()} />);
    await userEvent.click(screen.getAllByRole("button")[0]);
    await userEvent.click(screen.getByText("Oldest"));
    expect(screen.queryByText("Oldest")).not.toBeInTheDocument();
  });
  it("close the options when clicking button again", async () => {
    render(<SortFilter value="latest" onChange={vi.fn()} />);
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Oldest")).toBeInTheDocument();
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.queryByText("Oldest")).not.toBeInTheDocument();
  });
});
