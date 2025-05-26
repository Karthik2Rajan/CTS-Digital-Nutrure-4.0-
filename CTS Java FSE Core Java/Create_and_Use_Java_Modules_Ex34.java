module com.utils {
    exports com.utils;
}

package com.utils;

public class Utility {
    public static String getMessage() {
        return "Hello from Utility module!";
    }
}

module com.greetings {
    requires com.utils;
}

package com.greetings;

import com.utils.Utility;

public class GreetingsApp {
    public static String getGreeting() {
        return Utility.getMessage();
    }
}
