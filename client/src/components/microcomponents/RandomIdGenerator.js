let __randomIdGeneratorRandomIdCounter = 0;
const __randomIdGeneratorRandomIdString = 'random-id-service-';

export default function getRandomId() {
  __randomIdGeneratorRandomIdCounter += 1;
  return __randomIdGeneratorRandomIdString + __randomIdGeneratorRandomIdCounter;
}
