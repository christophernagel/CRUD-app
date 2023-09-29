import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Wow so good'
    },
    {
        id: 2,
        rating: 8,
        text: 'This is pretty good'
    },
    {
        id: 3,
        rating: 1,
        text: "what even was this",
    
},
])

