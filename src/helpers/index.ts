import { getCollection } from "astro:content";

export const exercises = (await getCollection("blog")).sort((a, b) =>
  new Date(a.data.date).valueOf() > new Date(b.data.date).valueOf() ? -1 : 1,
);

export const tags = Array.from(
  new Set(
    exercises
      .map((exercise) => {
        if (exercise.data.tags && exercise.data.tags.length) {
          return exercise.data.tags;
        }
        return [];
      })
      .flat(),
  ),
).sort();

export const years = Array.from(new Set(exercises.map((exercise) => new Date(exercise.data.date).getFullYear().toString()))).sort();
