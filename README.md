# doNotTrack polyfill till IE6 compatibility

# Usage 

```

import doNoTrack from 'is-donottrack'

// then 


doNoTrack.isEnabled() // true/false/new Error('Unsupported!')



```

# Possible Values 

It returns Three values 

- true If user has opted for doNotTrack 
- false if user hasn't opted for doNotTrack 
- Error if browser doesn't support it. 

Note: Since IE6 supports Error, I am returning Error, I wouldn't care if browser is older than IE6. But it works! 




# Testing

It should work - I have tested it using BrowserStack and results were all great! If you still find any issue please let me know.
