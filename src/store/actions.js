import Constant from '../constant'
import axios from 'axios'

export default {
  [Constant.SET_BANK_LIST]: (store, payload) => {
    axios.get('/fss/companies', {
      params: {
        top_fin_grp_No: '020000',
        page_no: 1
      }
    }).then(res => {
      const data = res.data.data
      payload = {
        bankList: data
      }
      store.commit(Constant.SET_BANK_LIST, payload)
    })
  }
}
