export const purchaseTemplate = async (templateId) => {
  // Fake purchase for now.
  // Later, this function will call RevenueCat / Apple / Google payments.

  return {
    success: true,
    templateId,
  };
};

export const restorePurchases = async () => {
  // Fake restore for now.
  // Later, this function will ask RevenueCat / Apple / Google
  // which templates this user has already purchased.

  return {
    success: true,
    restoredTemplateIds: [],
  };
};