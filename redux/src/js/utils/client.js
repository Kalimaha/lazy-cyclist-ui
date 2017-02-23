import $ from 'jquery'

export function ajax(config) {
  return new Promise((resolve, reject) => {
    $.ajax(config).then(
      (data)  => { resolve(data) },
      (jqXHR) => { reject(jqXHR) }
    )
  })
}
