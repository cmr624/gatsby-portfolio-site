[![Netlify Status](https://api.netlify.com/api/v1/badges/698f742d-de1d-4b7a-9887-55d27f235ea3/deploy-status)](https://app.netlify.com/sites/confident-mayer-68cf56/deploys)
<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">CM Portfolio Site at <br/>carlos-michael.com</h1>
<h2 align="center">
  Project Bootstrapped from Gatsby's default starter
</h1>

## Details

Developed as the 4th web app version of my portfolio website, I always like to build a new website while learning new tools. This repository is an example of that effort! This is my first time using Gatsby and GraphQL on a project, so I am learning as I am developing! You can find the previous versions of my website on my GitHub profile. Oh and also, I learned Vim while making this project! That was fun!

## Features

1. Lazy Loading for Images!
2. Built in Typescript support
3. Programmatic pages built from GraphQL queries

## Coming Soon

1. Gallery Component (indexes)
2. Individual Project pages 

## Feedback Wanted!

Since this is a learning experience for me, if anyone is interested in reaching out with code contributions or recommendations for patterns I should be using, please do!

For example, I am particularly confused about how to best query lazy-loaded `gatsby-image` components, as I could only think of the following:

1. Hard coding every query for every picture type, since you can't use string interpolation in `useStaticQuery`
2. Query-ing all images and just picking the right one to fill the component with (this is what I currently do, using `array.find`)
