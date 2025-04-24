import { Meme } from "../types/Meme"

export type MemeResponse = {
  success: boolean,
  data: {
    memes: Meme[]
  },
}