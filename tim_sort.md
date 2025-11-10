## TIM SORT

---

- STEPS :

1. RUN -> Find the runs Length : -> runs : consecutive elements in an ascending
   order. NOTE : If the consecutive elements are in descending order, then
   convert it into ascending order.

## DETAILS RUN LENGTH IS :

-> Insertion sort is most efficient on short collections, so we want our **run
length to be relatively small**. At the same time, the merging algorithm works
best when the **number of runs is a power of two or slightly less than one** .
-> We also want to **minimize our number of runs**, preferring slightly longer
runs over more of them, as long as they don’t get too long.

## NOTE :

One such algorithm for this involves starting with the entire array length
halving it until we get below a certain threshold

---

2. SORT RUN -> Sort each run : -> For sorting each run elements, use insertion
   sort.

3. MERGE RUN -> Sort adjacent runs : -> For sorting adjacent runs, use merge
   sort recursively.
