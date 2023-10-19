import { initialsFromName } from "@/features/common/initials";

describe("initialsFromName", () => {
  it("returns '' if name is falsy", () => {
    expect(initialsFromName(null)).toBe("");
    expect(initialsFromName("")).toBe("");
  });

  it("returns the first two letters of a single name", () => {
    expect(initialsFromName("John")).toBe("JO");
    expect(initialsFromName("Mary")).toBe("MA");
  });

  it("returns the first letter of the last name and the first letter of the first name for two names", () => {
    expect(initialsFromName("Smith, John")).toBe("JS");
    expect(initialsFromName("Johnson, Mary")).toBe("MJ");
  });

  it("returns the first letter of the next to last name if the name has a suffix in parentheses", () => {
    expect(initialsFromName("Doe, John (Contractor)")).toBe("JD");
    expect(initialsFromName("Anne, Mary (External)")).toBe("MA");
  });

  it("returns the first letter of the first segment if there are only two names and the last segment starts with '('", () => {
    expect(initialsFromName("John (Contractor)")).toBe("J");
    expect(initialsFromName("Mary (External)")).toBe("M");
  });
});