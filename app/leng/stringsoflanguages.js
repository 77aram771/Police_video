import React from 'react';
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
    "en": {
        first: "How are You ?",
        second: "I am fine ",
    },
    "fr": {
        first: "comment allez vous",
        second: "je vais bien",
    }
});
export default strings;