import React from "react";
import Linkify from "react-linkify";

export function linkDecorator(href, text, index) {
  return(<a key={index} href={href} target="_blank" rel="nofollow noopener noreferrer">{text}</a>);
}

export function convertLinks(text) {
  return <Linkify componentDecorator={linkDecorator}>{text}</Linkify>;
}
