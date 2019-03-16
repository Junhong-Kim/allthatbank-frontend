export function sortByKey (data, key) {
  data.sort(function (a, b) {
    let keyA = a[key]
    let keyB = b[key]

    // keyA가 keyB보다 작을 때
    if (keyA < keyB) {
      return -1
    }
    // keyA가 keyB보다 클 때
    if (keyA > keyB) {
      return 1
    }
    // keyA와 keyB가 동일할 때
    return 0
  }).reverse()
}
