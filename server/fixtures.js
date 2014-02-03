if (Posts.find().count() === 0) {
    Posts.insert({
        bookNumber: 1,
        chapterNumber: 1,
        verseNumber: 1,
        author: 'MrTest',
        verseContent: 'Versify is an online collaborative document editor.',
        votes: 1
    });

    Posts.insert({
        bookNumber: 1,
        chapterNumber: 1,
        verseNumber: 2,
        author: 'MrTest',
        verseContent: ' Each idea presented in a Versify document is given a verse number.',
        votes: 1
    });

    Posts.insert({
        bookNumber: 1,
        chapterNumber: 1,
        verseNumber: 3,
        author: 'MrTest',
        verseContent: 'Readers can vote up or down a verse or submit an alternate verse as a replacement.',
        votes: 1
    });

    Posts.insert({
        bookNumber: 1,
        chapterNumber: 1,
        verseNumber: 1,
        author: 'MrTumnus',
        verseContent: 'VERSIFY is a collaborative document editor.',
        votes: 2
    });
    
    Posts.insert({
        bookNumber: 1,
        chapterNumber: 1,
        verseNumber: 2,
        author: 'MrTumnus',
        verseContent: 'Each idea presented in a VERSIFY document is given a verse number.',
        votes: 2
    });
}