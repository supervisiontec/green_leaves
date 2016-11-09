/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.gl.master.repository.vehicle_owner;

import com.mac.gl.master.model.vehicle_owner.MVehicleOwner;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Supervision
 */
public interface VehicleOwnerRepository extends JpaRepository<MVehicleOwner, Integer> {
    
     public List<MVehicleOwner> findByNameAndNicNumberAndMobileNumberAndTelephoneNumberAndAddressLine1AndAddressLine2AndAddressLine3(String name,String nic,String mobile,String telephone,String address1,String address2,String address3);
     
}
