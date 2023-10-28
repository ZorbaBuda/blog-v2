"use client";
import Image from "next/image";
import { format } from "date-fns";
import * as React from "react";
import Tag from "./Tag";
import Link from "next/link";
import logo from "@/public/biology-of-love.jpg";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "./Category";
import './card6.css'

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  //   console.log(imageUrl)
  //   console.log(typeof imageUrl)
  // console.log("equals? ", imageUrl === immUrl)
  return (
    <>
    <section className="info">
  <img src="https://codetheweb.blog/assets/img/icon2.png">
  <h1>Learn HTML &mdash; <a href="https://codetheweb.blog/" target="_blank">Code The Web</a></h1>
</section>
<section className="cards-wrapper">
  <div className="card-grid-space">
    <div className="num">01</div>
    <Link className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
      <div>
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
        <div className="date">6 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </Link>
  </div>
  <div className="card-grid-space">
    <div className="num">02</div>
    <a className="card" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/" style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')">
      <div>
        <h1>Basic types of HTML tags</h1>
        <p>Learn about some of the most common HTML tags…</p>
        <div className="date">9 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div className="card-grid-space">
    <div className="num">03</div>
    <a className="card" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')">
      <div>
        <h1>Links, images and about file paths</h1>
        <p>Learn how to use links and images along with file paths…</p>
        <div className="date">14 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  </section>
 
   {/* <!-- https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 -->  */}
</>
);
 
}
