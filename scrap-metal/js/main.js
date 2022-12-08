document.addEventListener('DOMContentLoaded', () => {

  /* ========== Modal logic ========== */
  let btnOpenModal = document.querySelectorAll('*[data-modal-open]');
  const btnCloseModal = document.querySelectorAll('*[data-modal-close]');
  const btnBlockModal = document.querySelectorAll('*[data-modal-block]');
  const modals = document.querySelectorAll('.modal-wrapper');
  
  btnOpenModal.forEach(btn => {
    btn.addEventListener('click', toggleModalClass);
  });
  btnCloseModal.forEach(btn => {
    btn.addEventListener('click', toggleModalClass);
  });

  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target.className.includes('modal-wrapper')) {
        modal.classList.remove('active');
        document.body.classList.remove('scroll-off')
      }
    })
  });

  function toggleModalClass() {
    btnBlockModal.forEach(block => {

      if (this.dataset.modalOpen === block.dataset.modalBlock || this.dataset.modalClose === block.dataset.modalBlock) {
        block.classList.toggle('active');

        // If state active hide body scroll
        if (block.className.includes('active') && block.className.includes('modal')) {
          document.body.classList.add('scroll-off')
        } else {
          document.body.classList.remove('scroll-off')
        }
      }

    });
  }


  /* Tabs */
  const dataTabsWrapper = document.querySelectorAll('*[data-tabs-wrapper]');
  let curTabItemHeight

  dataTabsWrapper.forEach(tabW => {
    const tabItems = tabW.querySelectorAll(`[data-tab-item]`)

    setTabItemsHeight(tabItems)

    tabW.addEventListener('click', e => {
      const tabHeader = e.target.dataset.tabHeader
      const tabHeaderheight = e.target.offsetHeight
      
      if (tabHeader) {
        const tabItem = e.target.closest(`[data-tab-item]`)
        const tabItemHeight = e.target.offsetHeight
        const tabItemActive = !tabItem.className.includes(' active')

        toggleActiveState(tabItem, tabHeaderheight)       
        setTabFullHeight(tabItemActive, tabItem)
      }
    })
  });

  function setTabItemsHeight(tabItems) {
    tabItems.forEach(item => {
      const curHeaderHeight = item.querySelector('[data-tab-header]').offsetHeight

      item.dataset.fullHeight = item.offsetHeight
      item.style.maxHeight = curHeaderHeight + 'px'
    }) 
  }

  function toggleActiveState(tabItem, tabHeaderheight) {
    tabItem.style.maxHeight = tabHeaderheight + 'px'
    tabItem.classList.toggle('active')
  }

  function setTabFullHeight(condition, tabItem) {
    if (condition) {
      tabItem.style.maxHeight = Number(tabItem.dataset.fullHeight) + Number(100) + 'px'
    }
  }


  /* Mob menu list toggle */
  const liHasChild = document.querySelectorAll('.mob-menu li.menu-item-has-children');
  
  liHasChild.forEach(li => {
    const aTag = li.querySelector('a')
    
    aTag.addEventListener('click', e => {
      e.preventDefault()
      li.classList.toggle('active')
    })
    
  })
  
  /* Select 2 */
  // const modalFormSelects = document.querySelectorAll('.modal__item-form select');
  
  // modalFormSelects.forEach(select => {
  //   $(select).select2({
  //     minimumResultsForSearch: Infinity
  //   });
  // })

})
