import { render, screen } from "@testing-library/react";
import Nav from "@/components/global/nav";

describe("<Nav/>", () => {
    it("Should have Navbar text", () => {
        render(<Nav/>); // ARRANGE
        const navElement = screen.getByText("Navbar"); // ACT
        expect(navElement).toBeInTheDocument(); // ASSERT
    });
});


