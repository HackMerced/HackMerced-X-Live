# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# HackMerced-X-Live
Live page for HackMerced X in collaboration with Badger


# Contribution Guide:

1. Go to live page figma https://www.figma.com/design/hBaIAl98hA7fgrKnOhmAkV/HackMerced-X-Live-Page?node-id=0-1&t=ks6Bldnqjj1oBdCY-1

2. Read the ideas in the figma file .

3. Figure out what you want to do and CHECK ISSUES page.  
    - if issue is already there and claimed do somethingelse sorry
    - else if issue exists but unclaimed,  claim it and good luck! 
    - else if issue does not exist, make an issue and claim it!

    claim by just addign a comment liek i will implemenbt this ! 

3. make components to use on webstie.  DO NOT DIRECLTY USE FIGMA COMPONENTS
    - select the figma component by clicking until selecting item
        - potentially need to dig around in the groups and make sure htat you have selcted the correct ones.  
        - make sure hte unions and exclusions parent child relations ships are maintained.
    - then create a copy of it and drag it to the white frame at the bottom called Components maker
    - then export as SVG
    - place into the public folder in the correct asset folder
        - if this is a component for the main page use the mainAssets folder.  
            - if no dir please mkdir with NAMEOFPAGEAssets in camelCase.
    
3. implement the change in a new branch off of most up to date branch.
    - git checkout -b "NEW BRANCH NAME"

    - make sure to look at mobile view responsiveness and test with other browsers.
    

4. commit often!    git add .   git commit -m "NAME, WHAT YOU CHANGED"  
5. git push
    - might ask you to set upstream, jsut copy the command provided

6. create a pull request 
    - use checklist https://github.com/HackMerced/HackMerced/pull/217
    - main things
        - write down which mobile devices you tested
        - write down which browsers you tested \(aka test SAFARI >:\(
        - add screenshots of what you impelemented




