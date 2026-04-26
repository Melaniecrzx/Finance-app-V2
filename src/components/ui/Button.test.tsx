import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly with children text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("default type is not submit", () => {
    render(<Button>Ok</Button>);
    expect(screen.getByRole("button")).not.toHaveAttribute("type", "submit");
  });

  it("renders with type submit", () => {
    render(<Button type="submit">Send</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Button className="my-class">Ok</Button>);
    expect(screen.getByRole("button")).toHaveClass("my-class");
  });

  it("applies correct class for primary mode", () => {
    render(<Button mode="primary">Ok</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-grey-900");
  });

  it("applies correct class for destroy mode", () => {
    render(<Button mode="destroy">Ok</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red");
  });

  it("applies correct class for secondary mode", () => {
    render(<Button mode="secondary">Ok</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-beige-50");
  });
});
