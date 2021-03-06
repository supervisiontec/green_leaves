/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.green_leaves.zmaster.route;

import com.mac.green_leaves.v1.green_leaves.zmaster.route.model.MRoute;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

/**
 *
 * @author Don
 */
public interface GLRouteRepository extends JpaRepository<MRoute, Integer> {

    public List<MRoute> findByBranch(Integer branch);
}
