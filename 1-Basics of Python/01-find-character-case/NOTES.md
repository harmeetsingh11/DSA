<h3>My Approach</h2>

1.  Check if ASCII code of input char lie between ASCII code of uppercase A to Z. If yes, then print 1.
2.  Same goes for lowercase a to z. If yes, print 0.
3.  If none of the above conditions satisfies, then print -1.

<h3>Editorial's Approach (Solution)</h2>

```
ch = input()

if ch >= 'A' and ch <= 'Z' :
    print(1)
elif ch >= 'a' and ch <= 'z' :
    print(0)
else :
    print(-1)
```
