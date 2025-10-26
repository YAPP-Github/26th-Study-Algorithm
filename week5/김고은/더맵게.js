function solution(scoville, K) {
    var answer = 0;
    
    let minHeap = new Heap();
    
    scoville.forEach((e) => {
        minHeap.add(e)
    });

      while (minHeap.length() > 1 && minHeap.peek() < K) {
        const first = minHeap.poll();
        const second = minHeap.poll();
        const mixed = first + second * 2;
        minHeap.add(mixed);
        answer++;
      }

      return minHeap.peek() >= K ? answer : -1;
}


class Heap {
    constructor (){
        this.heap = [];
    }
    
    peek () {
        return this.heap[0];
    }

    length () {
        return this.heap.length;
    }

    getparentIdx (idx) {
        return Math.floor((idx - 1) / 2); 
    }

    getLeftChild (idx) {
        return idx  * 2 + 1; 
    }

    getRightChild (idx) {
        return idx  * 2 + 2; 
    }

    swap (idx1, idx2) {
        [this.heap[idx1],this.heap[idx2] ] = [this.heap[idx2],this.heap[idx1] ];
    }

    bubbleUp () {
        let idx = this.length() -1;
        let parentIdx = this.getparentIdx(idx);
        
        while(this.heap[parentIdx] && this.heap[parentIdx] > this.heap[idx]){
            this.swap(parentIdx, idx);
            idx = parentIdx;
            parentIdx = this.getparentIdx(idx);
        }
    }

    add (value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleDown () {
        let idx = 0;
        let leftChild = this.getLeftChild(idx);
        let rightChild = this.getRightChild(idx);
        
        while((this.heap[leftChild] && this.heap[idx] > this.heap[leftChild] ) || 
            (this.heap[rightChild] && this.heap[idx] > this.heap[rightChild] ) ) {
            let smaller_idx = leftChild;
            if(this.heap[leftChild] > this.heap[rightChild]) smaller_idx = rightChild;
            
            this.swap(smaller_idx, idx);
            idx = smaller_idx;
            leftChild = this.getLeftChild(idx);
            rightChild = this.getRightChild(idx);
        }
    }

    poll () {
        if(this.length() === 0) return -1;
        if(this.length() === 1) return this.heap.pop();
        
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

}