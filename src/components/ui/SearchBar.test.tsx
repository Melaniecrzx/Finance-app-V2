import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders the input", () => {
    render(<SearchBar searchInput="" setSearchInput={vi.fn()} />);
    expect(
      screen.getByPlaceholderText("Search transaction"),
    ).toBeInTheDocument();
  });
  it("displays the search input", () => {
    render(<SearchBar searchInput="hello" setSearchInput={vi.fn()} />);
    expect(screen.getByPlaceholderText("Search transaction")).toHaveValue(
      "hello",
    );
  });
  it("calls setSeachInput when typing", async () => {
    const setSearchInput = vi.fn();
    render(<SearchBar searchInput="" setSearchInput={setSearchInput} />);
    await userEvent.type(
      screen.getByPlaceholderText("Search transaction"),
      "abc",
    );
    expect(setSearchInput).toHaveBeenCalledTimes(3);
  });
  it("calls setPage with 1 when typing", async () => {
    const setPage = vi.fn();
    render(
      <SearchBar searchInput="" setSearchInput={vi.fn()} setPage={setPage} />,
    );
    await userEvent.type(
      screen.getByPlaceholderText("Search transaction"),
      "a",
    );
    expect(setPage).toHaveBeenCalledTimes(1);
  });
  it("does not crash without setPage", async () => {
    render(<SearchBar searchInput="" setSearchInput={vi.fn()} />);
    await userEvent.type(
      screen.getByPlaceholderText("Search transaction"),
      "a",
    );
    expect(
      screen.getByPlaceholderText("Search transaction"),
    ).toBeInTheDocument();
  });
});
