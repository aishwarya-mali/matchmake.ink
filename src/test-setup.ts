import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn().mockReturnValue(vi.fn()),
}));

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
