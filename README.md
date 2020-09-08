# NicholasKoldys.github.io'


## Commit Message Guidelines


1. *Clear* and *Consise* Summary and Description
    - summary or title is to be considered a label for the grouped changes/additions.
    - description or body of the message is to be descriptive and list the changes/         additions.
    1. summary should outline what is discussed.
        - Bad: "[HTML] Fix typos"
        - Good: "[HTML] Fix typos in main body article-2"
    2. description should describe further detail.
        - Bad: "Admin sign-in button state false to true."
        - Good: "When admin access screen launched, sign in button is greyed out and 
                un-accessible.  The Sign-in button is set to false in loadTextField().
                Setting sign-in button to true fixes the issue."
        - Tip: Repeat the steps taken or reiterate the issue.
2. *Avoid Non-Permanent Messages*
    - Bad: "[CSS] Added div-id1, _Please review changes_ -_Nick_"
    - Bad: "[JS] Added filterFunction param, _fixes OCT update_"
3. *Present Tense Only*
4. *Bug Fixes Require* *Label* and *Number*
    - _ex._ bugfix:00001 title summary