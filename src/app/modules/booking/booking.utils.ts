export const isValidDateFormat = (date: string): boolean => {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(date)) {
    return false
  }

  // Additional check to see if it's a valid date
  const parsedDate = new Date(date)
  const [year, month, day] = date.split('-').map(Number)

  return (
    parsedDate.getFullYear() === year &&
    parsedDate.getMonth() + 1 === month &&
    parsedDate.getDate() === day
  )
}
