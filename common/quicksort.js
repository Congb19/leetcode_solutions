const quickSort = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {//�����ߵ��������ڵ����ұߵ�����˵���������
            return
        }
        let i = left
        let j = right
        const baseVal = arr[j] // ȡ�����������һ����Ϊ��׼ֵ
        while (i < j) {//�����бȻ�׼ֵС����������ߴ���������ұ�
            while (i < j && arr[i] <= baseVal) { //�ҵ�һ���Ȼ�׼ֵ���������
                i++
            }
            arr[j] = arr[i] // ���ϴ��ֵ�����ұ����û�бȻ�׼ֵ��������ǽ��Լ���ֵ���Լ���i ���� j��
            while (j > i && arr[j] >= baseVal) { //�ҵ�һ���Ȼ�׼ֵС��������
                j--
            }
            arr[i] = arr[j] // ����С��ֵ����������û���ҵ��Ȼ�׼ֵС�������ǽ��Լ���ֵ���Լ���i ���� j��
        }
        arr[j] = baseVal // ����׼ֵ��������λ�����һ��ѭ������ʱ�� j ���� i ��
        sort(arr, left, j-1) // ����ߵ����������ظ�����Ĳ���
        sort(arr, j+1, right) // ���ұߵ����������ظ�����Ĳ���
    }
    const newArr = array.concat() // Ϊ�˱�֤��������Ǵ���������һ������
    sort(newArr)
    return newArr
}
let arr=[6,2,5,3,4];
console.log(quickSort(arr));