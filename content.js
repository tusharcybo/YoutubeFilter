// Function to log video titles and channel names
function logVideoDetails() {
  // Select all video elements
  const videos = document.querySelectorAll("ytd-rich-grid-media");

  // Check if any videos were found
  if (videos.length === 0) {
    console.log("No videos found. Check the selectors or page load.");
    return; // Exit if no videos found
  }

  videos.forEach((video) => {
    // Retrieve filters from chrome storage
    chrome.storage.sync.get(["filters"], (result) => {
      const filtersArray = result.filters || [];
      //console.log("Filters:", filtersArray);
    });

    // Get video title and channel name
    const videoTitleElement = video.querySelector("#video-title");
    const channelNameElement = video.querySelector("ytd-channel-name");

    // Ensure the elements exist
    if (videoTitleElement && channelNameElement) {
      const videoTitle = videoTitleElement.innerText;
      const channelName = channelNameElement.innerText;

      // Log the video title and channel name to the console
      //console.log(`Video Title: ${videoTitle}`);
      //console.log(`Channel Name: ${channelName}`);
    } else {
      //console.log("Title or channel name element not found for a video.");
    }
  });
}

// Run the logging function every time new content is loaded
const observer = new MutationObserver(logVideoDetails);
observer.observe(document.body, {childList: true, subtree: true});

// Initial log on page load
logVideoDetails();
