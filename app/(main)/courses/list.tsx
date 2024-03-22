"use client"

import { courses } from "@/db/schema"

type Props = {
    courses: typeof courses.$inferInsert[]
    activeCourseId: number
}

export const List =({}: Props) => {
    return (
        <div>
            List
        </div>
    )
}