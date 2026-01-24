import { create } from "zustand";

type LikeStore = {
  likes: number;
  liked: boolean;
  setLikes: (count: number) => void;
  likeTweet: () => void;
  removeLikeTweet: () => void;
};

export const useLikeTweets = create<LikeStore>((set) => ({
    likes: 0,
    liked: false,
    setLikes: (count: number)=> set({likes: count}),
    likeTweet: () => set((state: any) => ({ likes: state.likes++, liked: true })),
    removeLikeTweet: () => set((state:any) => ({ likes: state.likes > 0 ? state.likes-- : 0, liked: false }))
}))


