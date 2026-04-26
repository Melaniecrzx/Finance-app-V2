import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuDropdown from "./MenuDropdown";
import type { DropdownLink } from "../../types";

afterEach(() => {
  cleanup();
});

const mockLinks: DropdownLink[] = [
  { id: 1, label: "Edit", onClick: vi.fn(), className: "" },
  { id: 2, label: "Delete", onClick: vi.fn(), className: "text-red" },
];

describe("MenuDropDown", () => {
  it("renders correctly the trigger button", () => {
    render(<MenuDropdown button={<span>Open</span>} links={mockLinks} />);
    expect(screen.getByText("Open")).toBeInTheDocument();
  });
  it("does not show items before clicking", () => {
    render(<MenuDropdown links={mockLinks} button={<span>Open</span>} />);
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
  });
  it("shows items after clicking", async () => {
    render(<MenuDropdown button={<span>Open</span>} links={mockLinks} />);
    await userEvent.click(screen.getByText("Open"));
    expect(screen.queryByText("Edit")).toBeInTheDocument();
    expect(screen.queryByText("Delete")).toBeInTheDocument();
  });
  it("calls onclick when a menu item is clicked", async () => {
    const handleClick = vi.fn();
    const links = [
      { id: 1, label: "Edit", onClick: handleClick, className: "" },
    ];
    render(<MenuDropdown button={<span>Open</span>} links={links} />);
    await userEvent.click(screen.getByText("Open"));
    await userEvent.click(screen.getByText("Edit"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("applies cusom className to a menu item", async () => {
    render(<MenuDropdown button={<span>Open</span>} links={mockLinks} />);
    await userEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Delete")).toHaveClass("text-red");
  });
});
