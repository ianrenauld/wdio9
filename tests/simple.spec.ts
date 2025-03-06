describe("Go to Google", () => {
  it("should go to Google", async () => {
      await browser.throttleNetwork("Regular4G");
      await browser.url("https://www.google.com");
  });
});
