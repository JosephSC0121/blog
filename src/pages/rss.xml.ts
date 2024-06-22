import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../config";

export async function GET(context: any) {
  const exercises = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: exercises.map((exercise) => ({
      ...exercise.data,
      pubDate: new Date(exercise.data.date),
      link: `/blog/${exercise.slug}/`,
    })),
  });
}
