import ClassRoom from './0-classroom';

/**
 * Implement a function named initializeRooms.
 * It should return an array of 3 ClassRoom
 * objects with the sizes 19, 20, and 34 (in this order).
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}