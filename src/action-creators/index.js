import * as Actions from '../actions/Actions.js';

export function fetchBlogContent(posts) {
  return {
    type: Actions.GET_BLOG_CONTENT,
    posts
  }
}

export function getBlogDetail(post) {
  return {
    type: Actions.SET_BLOG_DETAIL,
    post
  }
}

export function getWorksContent(works) {
  return {
    type: Actions.GET_WORKS_CONTENT,
    works
  }
}

export function getWorksDetail(work) {
  return {
    type: Actions.SET_WORKS_DETAIL,
    work
  }
}

export function getWorksGallery(gallery) {
  return {
    type: Actions.GET_WORKS_GALLERY,
    gallery
  }
}

export function getGalleryDetail(gall) {
  return {
    type: Actions.SET_GALLERY_DETAIL,
    gall
  }
}
