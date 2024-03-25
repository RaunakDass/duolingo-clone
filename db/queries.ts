import { cache } from "react"
import db from "./drizzle";

export const getUserProgress = cache(aysnc () => {
    const {userId} = await auth()

    if(!userId){
        return null
    }

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        }
    })

    return data
})


export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();


    return data
})