/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.master.vehicle_owner;

import com.mac.green_leaves.v1.master.vehicle_owner.model.MVehicleOwner;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Supervision
 */
public interface VehicleOwnerRepository extends JpaRepository<MVehicleOwner, Integer> {

    public List<MVehicleOwner> findByNicNumberOrMobileNumber(String nic, String mobile);

}
