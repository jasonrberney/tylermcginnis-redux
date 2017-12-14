{
    users: {
        isAuthed,
        isFetching,
        error,
        authedId,
        [uid]: {
            lastUpdated,
            info:{
                name,
                uid,
                avatar
            }
        }
    },
    model: {
        duck,
        isopen
    },
    ducks:{
        [duckId]: {
            lastUpdated,
            info: {
                avatar,
                duckId,
                name,
                text,
                timestamp,
                uid
            }
        }
    },
    usersDucks: {
        isFetching,
        error,
        [uid]: {
            lastUpdated,
            duckIs: [duckId, duckId, duckId]
        }
    },
    likeCount: {
        [duckId]: 0
    },
    usersLikes: {
        [duckId]: true
    },
    replies: {
        isFetching,
        error,
        [duckId]: {
            replies: {
                lastUpdated,
                [replyId]: {
                    name, 
                    comment,
                    uid,
                    timestamp,
                    avatar
                }
            }
        }
    },
    listeners: {
        [listenerdId]: true
    },
    feed: {
        isFetching,
        error,
        newDucksAvailable,
        duckIdsToAdd: [duckId, duckId],
        duckIds: [duckId, duckId]
    }
}