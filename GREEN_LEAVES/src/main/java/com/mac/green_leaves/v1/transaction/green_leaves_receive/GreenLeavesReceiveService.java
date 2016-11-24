/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.transaction.green_leaves_receive;

import com.mac.green_leaves.v1.transaction.green_leaves_receive.model.TGreenLeavesReceive;
import com.mac.green_leaves.v1.transaction.green_leaves_receive.model.TGreenLeavesReceiveDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Don
 */
@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class GreenLeavesReceiveService {

    @Autowired
    private GreenLeavesReceiveRepository greenLeavesReceiveRepository;

    @Autowired
    private GreenLeavesReceiveDetailRepository greenLeavesReceiveDetailRepository;

    public TGreenLeavesReceive saveGreenLeaveReceiveDetails(TGreenLeavesReceive greenLeavesReceive) {
        TGreenLeavesReceive greenLeavesReceive1 = greenLeavesReceiveRepository.save(greenLeavesReceive);
        System.out.println(greenLeavesReceive);
        System.out.println(greenLeavesReceive1.getIndexNo());
//        for (TGreenLeavesReceiveDetail greenLeavesReceiveDetail : greenLeavesReceive.getGreenLeavesReceiveDetails()) {
//            greenLeavesReceiveDetail.setGreenLeavesReceive(greenLeavesReceive1.getIndexNo());
//            System.out.println(greenLeavesReceiveDetail);
//            greenLeavesReceiveDetailRepository.save(greenLeavesReceiveDetail);
//        }
        return greenLeavesReceive;
    }
}