# OLLIF Guide

Static website for the OLLIF Operations Atlas.

## What It Is

This project turns a shared "Intro to OLLIF" Google Drive folder into a simple training and reference website. It organizes:

- OR setup visuals
- C-arm videos
- Core procedural documents
- Care protocols
- White papers and study references

## Project Structure

- `index.html` contains the page structure
- `styles.css` contains the visual design
- `app.js` contains the site data and rendering logic
- `assets/` stores local images and selected documents
- `drive_html/` and `drive_folder.html` are saved Google Drive reference pages used during content assembly

## How To Use

Open `index.html` in a browser.

The site itself is local and static, but some content still points to Google Drive:

- Embedded video previews
- "Open source" links
- Some download links

For the best experience, open the site while connected to the internet.

## Notes

- There is no build step and no environment file
- The site does not use the Google Drive API
- Google Drive file and folder links are hardcoded in `app.js`

## Clinical Use Disclaimer

This site is a navigation and training aid. For procedural, device, and patient-care decisions, defer to the original source documents, the official IFU/STG, and institutional policy.
