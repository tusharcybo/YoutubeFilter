document.getElementById("saveBtn").addEventListener("click", () => {
  // Get user input from the textarea
  let userInput = document.getElementById("userInput").value;
  console.log(userInput);
  // Split the input by commas and remove extra spaces
  const filtersArray = userInput.split(",").map((item) => item.trim());

  // Check If Filter is already persent
  chrome.storage.sync.get(["filters"], (result) => {
    const getFiltersArrayFromStorage = result.filters || [];
    console.log("From Storage  Filters:", getFiltersArrayFromStorage);
  });

  // Save the array in chrome storage
  //   chrome.storage.sync.set({filters: filtersArray}, () => {
  //     console.log("Filters saved:", filtersArray);
  //   });
});
