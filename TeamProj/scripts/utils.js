(function(global) {
  var ajaxUtils = {};

  ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse = true) {
    fetch(requestUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return isJsonResponse ? response.json() : response.text();
      })
      .then(data => {
        responseHandler(data);
      })
      .catch(error => {
        console.error('Fetch operation failed:', error);
      });
  };

  global.$ajaxUtils = ajaxUtils;
})(window);
