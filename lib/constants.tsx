import { Car, Dumbbell, Utensils, Waves, Wifi } from "lucide-react"

export type PropertyType = {
  id: number
  title: string
  location: string
  imageUrl: string
  visitors: number
  coordinates: { lat: number; lng: number }
  price: number
}

export const CARD_DATA: PropertyType[] = [
  {
    id: 1,
    title: "Oasis Sands Resort Homestay",
    location: "Casablanca, Morocco",
    imageUrl: "/images/living_room.jpg",
    visitors: 218,
    coordinates: { lat: 33.5731, lng: -7.5898 },
    price: 1500,
  },
  {
    id: 2,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5993, lng: -7.6204 },
    price: 2000,
  },
  {
    id: 3,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5647, lng: -7.662 },
    price: 1800,
  },
  {
    id: 4,
    title: "Oasis Sands Resort Homestay",
    location: "Casablanca, Morocco",
    imageUrl: "/images/living_room.jpg",
    visitors: 218,
    coordinates: { lat: 33.582, lng: -7.6094 },
    price: 1600,
  },
  {
    id: 5,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5683, lng: -7.673 },
    price: 2100,
  },
  {
    id: 6,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5787, lng: -7.6037 },
    price: 1900,
  },
  {
    id: 7,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "./images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5892, lng: -7.6333 },
    price: 2200,
  },
  {
    id: 8,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5584, lng: -7.6281 },
    price: 2300,
  },
  {
    id: 9,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5716, lng: -7.6492 },
    price: 2400,
  },
  {
    id: 10,
    title: "Oasis Sands Resort Homestay",
    location: "Palm Jumeirah, Dubai",
    imageUrl: "/images/home_bg.jpg",
    visitors: 218,
    coordinates: { lat: 33.5549, lng: -7.6148 },
    price: 2500,
  },
]

export const FOOTER_LINKS = [
  "Properties",
  "Host Mode",
  "About Us",
  "Help",
  "Privacy",
]

export const facilities = [
  { title: "Free WiFi", icon: <Wifi /> },
  { title: "Parking", icon: <Car /> },
  { title: "Swimming Pool", icon: <Waves /> },
  { title: "Gym", icon: <Dumbbell /> },
  { title: "Restaurant", icon: <Utensils /> },
]
