# NicholasKoldys.github.io'


## Commit Message Guidelines

The following are preferred guidelines that must be attempted when formatting commit messages.  Commit messages are very important to the integrity of the repository and incorrectly formatted messages should be actively corrected.

1. **Clear** and **Concise** Summary and Description
    - summary or title is to be considered a summarized label for the group of changes/additions.
    - description or body of the message is to be descriptive and list the changes/additions.

    1. **Summary** - outlines what is discussed.
        - Bad: "[html] Fix typos"
        - Good: "[html] Fix typos in main body article-2"
    2. **Description** - describes commit in further detail.
        - Bad: "Admin sign-in button state false to true."
        - Good: "When admin access screen launched, sign in button is greyed out and 
                un-accessible.  The Sign-in button is set to false in loadTextField().
                Setting sign-in button to true fixes the issue."
        - Tip: Repeat the steps taken or reiterate the issue.

2. **Avoid Non-Permanent Summary and Descriptions**
    - Bad: "[css] Add div-id1, _Please review changes_ -_Nick_"
    - Bad: "[js] Add filterFunction() param, _fixes OCT.10th update_"

3. **Present Tense Only**
    - Bad: "[html] Moved h1-pageHeader"
    - Good: "[html] Update h1-pageHeader to line-26"
    - Tip: Remember the messages explain a group of related changes and must be able to exist individualy if other commits are rolled back.

4. **Bug Fixes Require Label and Number**
    - _ex._ bugfix:00001 title summary

5. **Prefer Atomic Commits**
    - avoid large commits that cannot be grouped easily or are spread across multiple files or file-types.
    - attempt to only commit incremental and small changes for easier rollbacks.
    - if possible, break-up large commits into smaller commit groups that can be easily explained, summarized, and described.

6. **Prefer Multi-Line Commit Messages**
    - always attempt to use a summary and description message model.
    - if commits are better said in a few words _6 or less_ only use summary.

7. **Prefer Tag with Filetype**
    - if a single file-type is corrected/added, in the summary list the file-type in [ ].
    - _ex._ [js] [html] [css] [txt] [json]

8. **Avoid Jargon, Acronyms, and Time-Critical/Sensitive**