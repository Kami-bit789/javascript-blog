/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
  
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    } 
    /* [DONE] add class 'active' to the clicked link */
    
    console.log('clickedElement:', clickedElement);
   
    clickedElement.classList.add('active');
    
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */
    
    const articleSelector = clickedElement.getAttribute('href');
    
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  
    const targetArticle = document.querySelector(articleSelector);


    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');
}
  
const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

{ 
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){
  console.log('Links have been generated');

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    /* find all the articles and save them to variable: articles */

    let html = '';

    for(let article of articles){
    
    const articles = article.querySelectorAll(optArticleSelector);
    for (let article of articles){
      link.addEventListener('click', generateTitleLinks);
    }
    
    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log ('link do atykułu + tytuł artykułu');
    /* insert link into html variable */
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
}

generateTitleLinks();


