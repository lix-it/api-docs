//= require ../lib/_jquery

;(function () {
  'use strict';

  function setupConditionalContent() {
    var hasUserIdCookie = window.hasCookie('ajs_user_id');
    
    if (!hasUserIdCookie) {
      var linkedinSection = $('#linkedin-search-api');
      if (linkedinSection.length > 0) {
        linkedinSection.hide();
        
        $('.toc-wrapper a[href*="linkedin-search"]').parent().hide();
        $('.toc-wrapper a[href*="linkedin-people-search"]').parent().hide();
        $('.toc-wrapper a[href*="linkedin-job-search"]').parent().hide();
        $('.toc-wrapper a[href*="linkedin-posts-search"]').parent().hide();
        $('.toc-wrapper a[href*="linkedin-org-search"]').parent().hide();
        $('.toc-wrapper a[href*="sales-navigator"]').parent().hide();
        $('.toc-wrapper a[href*="search-facet-typeahead"]').parent().hide();
        $('.toc-wrapper a[href*="linkedin-recruiter"]').parent().hide();
        
        if (window.recacheHeights) {
          window.recacheHeights();
        }
      }
    }
  }

  window.setupConditionalContent = setupConditionalContent;
})();
