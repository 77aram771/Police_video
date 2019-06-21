import React from 'react';
import LocalizedStrings from 'react-native-localization';
import {Text} from "native-base";

const strings = new LocalizedStrings({
    "en": {
        SignUp: "Sign Up",
    },
    "fr": {
        SignUp: "S'inscrire",
    }
});
export default strings;