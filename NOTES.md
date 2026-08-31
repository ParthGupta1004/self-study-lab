In exercise 1.1 you removed position: relative from the avatar wrapper. Where did the badge go, and why exactly there?
Solution: After we removing the position: relative the red badge takes the reference of the nearest anchor which is the viewpoint refernce and it moves to the top-right of page.

In exercise 1.5 the card got stuck behind its sibling even at z-index: 9999. Explain what the wrapper did to it.
Solution: Even though z-index : 9999 that z-index only worked inside the wrapper's stacking context. It could not escape the wrapper and appear above a sibling stacking context.

Describe the wrong-row bug from exercise 5.1: what did you set, what did you click, and what did you see happen? Then explain why a stable id fixes it.
Solution: The wrong bug is that key store the place of the product not the exact location of the product because of that when we apply filter the elements place just changes not completely the product which causes the wrong reference and produce wrong results in future.

Your filter state lives in the URL rather than in useState. Name two concrete things that become possible because of that choice.
Solution:  
1) You can copy the URL like /products?q=phone&category=smartphones&sort=price-asc and another person opening it gets the same filters.
2) changing search/category/sort updates the URL, so pressing Back or Forward restores the previous filter state.

Name one thing you put in local useState that you were tempted to put in the Zustand store, and say why local was the right call.
Solution: Modals Open/Close state.

What is still unfinished or what are you least confident about? Be specific — this is the list I will use to plan the revision session, and there is no penalty for an honest answer.
Solution: I am least confident with searcParams part.