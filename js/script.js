const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
} ;
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags .list',
  optCloudClassCount = '5',
  optCloudClassPrefix = 'tag-size-';
  
function generateTitleLinks(customSelector = ''){
  console.log('Links have been generated');

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* [DONE] find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  console.log('articles', articles);
  for (let article of articles) {

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');
    
    /* [DONE] find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('link do atykułu + tytuł artykułu');
    /* [DONE] insert link into html variable */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

/*const calculateTagsParams = {tag: 'maxValue', tag: 'minVaue'};
  tag['maxValue'] = Math.max();
  tag['minValue'] = Math.min();*/

  /* [NEW] START LOOP: for every tag in allTags */

// function calculateTagsParams(allTags) {
//   const params = {max: '0', min: '999999'};

//   for (let tag in tags){
//     console.log(tag + 'is used' + tags[tag] + 'times');
//     params.max = Math.max(tags[tag], params.max);
//     params.min = Math.min(tags[tag], params.min);
//   }
//   return params;
// }
/*
function calculateTagClass(count, params){


}*/


function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  const tagList = document.querySelector('.tags');
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const articleTagsList = article.querySelector(optArticleTagSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray', articleTagsArray);
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const tagLinkHTML = '<li><a href="#tag- ' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to HTML variable */
      html = html + tagLinkHTML;
    }
    /* [NEW] check if this link is NOT already in allTags */
    if(!allTags[tag]){
      /* [NEW] add tag to allTags object */
      allTags[tag] = 1;
    } else {
      allTags[tag]++;
    }
     
    
    
    /* insert HTML of all the links into the tags wrapper */
    articleTags.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-' + tag + ' (' + allTags[tag] + ')"></a></li>';
  /* [NEW] END LOOP: for each tag in allTags: */
  }
  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}
generateTags();

const tagClickHandler = function (event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag- ', '');
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let activeTagLink of tagLinks) {
    /* remove class active */
    activeTagLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  } 
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinkHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tagLinks of tagLinkHref) {
    /* add class active */
    
    tagLinks.classList.add('active');
    /* END LOOP: for each found tag link */
  
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

  generateTitleLinks();
};

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for (let link of tagLinks) { 
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToTags();

function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* get authors from data-author attribute */
    const articleAuthor = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* generate HTML of the link */
    const linkHTML = '<p><a href="data-author"></a></p>';
    /* add generated code to HTML variable */
    html = html + linkHTML;  
    /* END LOOP: for every article: */
    articleAuthor.innerHTML = html;
  }
}
generateAuthors();

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('data-author');
  /* find all author links with class active */
  const authorLinks = document.querySelectorAll('a.active[href^="data-author"]');
  /* START LOOP: for each active author link */
  for (let activeAuthorLink of authorLinks){
    /* remove class active */
    activeAuthorLink.classList.remove('active');
  /* END LOOP: for each active author link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const authorLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found author link */
  for (let authorLinkHref of authorLinksHref){
    /* add class active */
    authorLinkHref.classList.add('active');
  /* END LOOP: for each found author link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');

  generateTitleLinks();
}

function addClickListenersToAuthors() {
  /* find all links to authors */
  const authorLinks = document.querySelectorAll('a[href^="data-author"]')
  /* START LOOP: for each link */
  for (let link of authorLinks) {
    /* add authorClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();

